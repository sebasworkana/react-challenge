import Button from '@/components/Button'
import { reduceCount } from '@/store/count'

const ReduceCount: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="mb-2 text-center">
      <Button color="danger" click={() => dispatch(reduceCount())}>
        reduce
      </Button>
    </div>
  )
}

export default ReduceCount
