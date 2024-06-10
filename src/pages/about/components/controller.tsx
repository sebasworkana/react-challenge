import Button from '@/components/Button'
import { setName } from '@/store/name'
import { useState } from 'react'

const Controller: React.FC = () => {
    const [firstName, SetFirstName] = useState("")
    const [lastName, SetLastName] = useState("")
    const dispatch = useDispatch()
    const handleClick = () => {
      dispatch(setName({ firstName, lastName }));
    };
    return (
        <>
            <div className="flex p-4">
                <div className="w-1/2 p-4 ">
                    <p className=' text-2xl text-primary font-bold'>
                        First Name
                    </p>
                    <input value={firstName} onChange={e => SetFirstName(e.target.value)}
                        type="text" className="w-full mt-4 p-2 rounded bg-[#b1b1b1]" />
                </div>
                <div className="w-1/2 p-4 ">
                    <p className=' text-2xl  text-primary font-bold'>
                        Last Name
                    </p>
                    <input value={lastName} onChange={e => SetLastName(e.target.value)}
                        type="text" className="w-full mt-4 p-2 rounded bg-[#b1b1b1]" />
                </div>
            </div>

            <div className="flex justify-center ">
                <Button color="secondary" click={handleClick}>
                    Breakify
                </Button>
            </div>
        </>
    )
}

export default Controller
