import Button from '@/components/Button'
import { addCount } from '@/store/count'

const AddCount: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="mb-2 text-center">
      <Button color="primary" click={() => dispatch(addCount())}>
        add
      </Button>
    </div>
  )
}

export default AddCount
