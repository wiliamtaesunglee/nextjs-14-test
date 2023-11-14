'use client';

import Image from "next/image";

export function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();
  };

  return (
   <div className="flex flex-col w-full gap-8">
    <h2>Edit Your Profile</h2> 
    <form onSubmit={updateUser} className="flex flex-col w-full gap-4">
      <label htmlFor="name">Name</label>
      <input className='w-full max-w-xs bg-gray-100 text-gray-600 rounded p-4' id="name" name="name" type="text" defaultValue={user?.name ?? ''} />
      <label htmlFor="bio">Bio</label>
      <textarea className='w-full max-w-lg rounded bg-gray-100 text-gray-600 p-4' name="bio" cols={10} rows={10} defaultValue={user?.bio ?? ''} />
      <label htmlFor="age">Age</label>
      <input className='w-full max-w-xs bg-gray-100 text-gray-600 rounded p-4' id="age" name="age" type="number" defaultValue={user?.age ?? ''} />
      <label htmlFor="image">Image</label>
      <Image
        className="w-52 h-52 rounded-full"
        src={user?.image ?? 'https://loremflickr.com/640/360'}
        alt="Profile Picture"
        width={200}
        height={200}
      />
      <input className='w-full max-w-xs bg-gray-100 text-gray-600 rounded p-4' id="image" name="image" type="text" defaultValue={user?.image ?? ''} />
      <button className="w-full max-w-[100px] p-2 rounded bg-gray-600 text-gray-300 hover:opacity-80" type="submit">Save</button>
    </form>
   </div> 
  )
}
