import * as D from "@/components/ui/dialog";

const EditProfile = () => {
  return (
    <D.Dialog>
      <D.DialogTrigger className="text-neutral-200 rounded font-semibold border border-neutral-700 p-2 px-3 text-sm">
        Edit Profile
      </D.DialogTrigger>
      <D.DialogContent>
        <D.DialogHeader>
          <D.DialogTitle>Are you absolutely sure?</D.DialogTitle>
          <D.DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </D.DialogDescription>
        </D.DialogHeader>
      </D.DialogContent>
    </D.Dialog>
  );
};

export default EditProfile;
