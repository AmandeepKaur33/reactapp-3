import React from "react";
// import michael from "./assets/images/user.avif";
// import lady from "./assets/images/lady.avif";
const UsersDarkTable = () => {
  const tasks = [
    {
      name: "Michael Foster",
      commitId: "2d89f0c8",
      // image: michael,
      branch: "main",
      status: "Completed",
      duration: "25s",
      timestamp: "45 minutes ago",
    },
    {
      name: "Lindsay Walton",
      commitId: "249df660",
      // image: lady,
      branch: "main",
      status: "Completed",
      duration: "1m 32s",
      timestamp: "3 hours ago",
    },
    {
      name: "Courtney Henry",
      commitId: "11464223",
      branch: "main",
      status: "Error",
      duration: "1m 4s",
      timestamp: "12 hours ago",
    },
    {
      name: "Courtney Henry",
      commitId: "dad28e95",
      branch: "main",
      status: "Completed",
      duration: "2m 15s",
      timestamp: "2 days ago",
    },
    {
      name: "Michael Foster",
      commitId: "624bc94c",
      branch: "main",
      status: "Completed",
      duration: "1m 12s",
      timestamp: "5 days ago",
    },
    {
      name: "Courtney Henry",
      commitId: "e111f80e",
      branch: "main",
      status: "Completed",
      duration: "1m 56s",
      timestamp: "1 week ago",
    },
    {
      name: "Michael Foster",
      commitId: "5e136005",
      branch: "main",
      status: "Completed",
      duration: "3m 45s",
      timestamp: "1 week ago",
    },
    {
      name: "Whitney Francis",
      commitId: "5c1fd07f",
      branch: "main",
      status: "Completed",
      duration: "37s",
      timestamp: "2 weeks ago",
    },
  ];
  return (
    <div className="mt-7 border-t border-r border-b border-l rounded-lg py-10 bg-gray-900 text-white black-table">
      <div className="table-heading px-8">
        <h1 className="font-semibold">Latest activity</h1>
      </div>
      <table className="w-full text-left text-sm mt-4">
        <thead>
          <tr>
            <th className="py-3.5 px-8 font-semibold">User</th>
            <th className="py-3.5 pr-8 font-semibold">Commit</th>
            <th className="py-3.5 pr-8 font-semibold">Status</th>
            <th className="py-3.5 pr-8 font-semibold">Duration</th>
            <th className="py-3.5 pr-8 font-semibold">Deployed at</th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-600">
          {tasks?.map((item) => (
            <tr>
              <td className="py-4 px-8 font-medium">
                <img
                  src={item?.image}
                  alt="Michael"
                  class="inline-flex mr-3 rounded-full w-8"
                />
                {item?.name}
              </td>
              <td className="py-4 pr-8 flex   text-gray-400">
                <p className="w-16">{item?.commitId}</p>
                <button
                  type="button"
                  className="ring-1 ring-slate-700 bg-gray-700/40 px-2 py-1 rounded-md text-xs ml-3.5"
                >
                  {item?.branch}
                </button>
              </td>
              <td className="py-4 pr-8">
                <div className="inline-flex p-1 bg-green-400/10 rounded-md mr-2">
                  <div
                    className={`${
                      item?.status === "Error" ? "bg-rose-400" : "bg-green-400"
                    } rounded-md h-1.5 w-1.5 st-complete`}
                  ></div>
                </div>
                {item?.status === "Error" ? "Error" : "Completed"}
              </td>
              <td className="py-4 pr-8 text-gray-400">{item?.duration}</td>
              <td className="py-4 pr-8 text-gray-400">{item?.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersDarkTable;
