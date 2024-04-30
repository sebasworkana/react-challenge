import { useEffect } from 'react';
import { Display } from './parts/Display';
import { NameInputs } from './parts/NameInputs';
import { useFetchPeriodicTable } from './hooks/app';
import './index.css';

function App() {
  const fetchPeriodicTable = useFetchPeriodicTable();

  useEffect(() => {
    fetchPeriodicTable();
  }, [fetchPeriodicTable]);

  return (
    <div className="py-10 flex flex-col items-center justify-center min-h-screen">
      <Display className="mb-10" />
      <NameInputs />
    </div>
  );
}

export default App;
