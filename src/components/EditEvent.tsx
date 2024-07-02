import { SubmitHandler,useForm } from "react-hook-form"
import React, {  useContext, useState } from "react"
import { Box, Button, Modal,  TextField } from "@mui/material"
import { EventContext } from "../lib/Context"
import { IEvent } from "../lib/types"
interface Inputs{
    title:string
    date:string
    time:string
    cover:string
    type:string
    composer:string
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  interface Props{
    event:IEvent
    }
export const EditEvent:React.FC<Props>=({event})=>{
    
        const context = useContext(EventContext)
        if (!context) {
            throw new Error("Out of provider...")
        }
        const { state } = context
    
    const [open,setOpen]=useState<boolean>(false)
    const {register, handleSubmit} = useForm<Inputs>()
    const handleEdit:SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }
    return <>
   
    <Button onClick={() => setOpen(true)} variant="contained">Edit</Button>
      {state.events.map(elm=><Modal key={elm.id} open={open} onClose={() => setOpen(false)}>
       <Box  sx={style} >
                <form onSubmit={handleSubmit(handleEdit)}>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="title"
                            {...register("title")}
                            value={event.title}

                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="date"
                            {...register("date")}
                            value={event.date}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="time"
                            {...register("time")}
                            value={event.time}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="composer"
                            {...register("composer")}
                            value={event.composer}
                        />
                    </Box>
                    <Box my={2}>
                        <TextField
                            variant="outlined"
                            label="type"
                            {...register("type")}
                            value={event.type}
                        />
                    </Box>
                    
                    <Button type="submit" variant="outlined"> save</Button>
                </form>
            </Box>
        
        </Modal>
        )}
    </>
}