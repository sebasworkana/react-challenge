import { FC, useState } from 'react';
import { Button, Input } from '../../components';
import { useSetNames } from '../../hooks/app';

type Props = {
  className?: string;
};

export const NameInputs: FC<Props> = ({ className = '' }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const setNames = useSetNames();

  const onBreak = () => {
    setNames({
      firstName,
      lastName,
    });
  };

  return (
    <div className={`${className} w-100`}>
      <div className="grid grid-cols-2 gap-5 px-2 mb-5">
        <Input
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <Button className="w-full" onClick={onBreak}>
        Breakify
      </Button>
    </div>
  );
};
