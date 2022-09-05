import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DisplayBucketList from './DisplayBucketList';
import BucketListForm from './BucketListForm';

const BucketListModal = ({open, handleClose, selectedActivity, user, activityId,bucketLists, activities }) => {

    console.log(activityId)


    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Select Bucket List</DialogTitle>
            <BucketListForm selectedActivity={selectedActivity} user={user} activityId={activityId} bucketLists={bucketLists} activities={activities}/>
            <DisplayBucketList selectedActivity={selectedActivity} />
        </Dialog>
    )

}

export default BucketListModal;