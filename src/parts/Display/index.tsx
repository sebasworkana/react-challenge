import { FC, useCallback, useMemo } from 'react';
import { useAppState } from '../../hooks/app.ts';

type Props = {
  className?: string;
};

type NamePart = {
  text: string;
  class?: string;
};

const ELEMENT_CATEGORIES = [
  'diatomic nonmetal',
  'noble gas',
  'alkali metal',
  'alkaline earth metal',
  'metalloid',
  'polyatomic nonmetal',
  'post-transition metal',
  'transition metal',
  'lanthanide',
  'actinide',
];

export const Display: FC<Props> = ({ className = '' }) => {
  const { firstName, lastName, elements } = useAppState();

  const symbolRegExp = useMemo(() => {
    const symbols = elements
      .map((item) => item.symbol)
      .sort((a, b) => b.length - a.length);
    return new RegExp(symbols.join('|'), 'ig');
  }, [elements]);

  const breakName = useCallback(
    (name: string) => {
      let lastIndex = 0;
      const nameParts: NamePart[] = [];
      while (name) {
        const match = symbolRegExp.exec(name);
        if (!match) {
          break;
        }
        if (lastIndex < match.index) {
          nameParts.push({
            text: name.substring(lastIndex, match.index),
          });
        }

        let category =
          elements.find(
            (item) => item.symbol.toLowerCase() === match[0].toLowerCase(),
          )?.category ?? '';
        if (!ELEMENT_CATEGORIES.includes(category)) {
          category = 'unknown';
        }
        nameParts.push({
          text: match[0],
          class: `elem-${category.replace(/\s/g, '-')}`,
        });

        lastIndex = match.index + match[0].length;
      }
      if (lastIndex < name.length) {
        nameParts.push({
          text: name.substring(lastIndex),
        });
      }
      return nameParts;
    },
    [symbolRegExp, elements],
  );

  const firstNameParts = useMemo(
    () => breakName(firstName),
    [firstName, breakName],
  );
  const lastNameParts = useMemo(
    () => breakName(lastName),
    [lastName, breakName],
  );

  return (
    <div className={`${className} text-white text-center`}>
      <div className="mb-2 h-37.5 flex items-center justify-center">
        <div className="text-3xl break-all">
          {firstNameParts.map((part, i) => (
            <span key={i} className={part.class}>
              {part.text}
            </span>
          ))}
        </div>
      </div>
      <div className="h-37.5 flex items-center justify-center">
        <div className="text-3xl break-all">
          {lastNameParts.map((part, i) => (
            <span key={i} className={part.class}>
              {part.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
