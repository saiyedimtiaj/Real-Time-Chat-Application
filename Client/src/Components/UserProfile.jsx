const UserProfile = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-700">
      <img
        className="w-12 bg-cover border-2 border-white rounded-full h-12"
        src="./profile.png"
        alt=""
      />
      <div>
        <h1 className="font-medium text-sm text-white">Saiyed Imtiaj</h1>
        <p className="text-white text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[230px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          repellat.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
