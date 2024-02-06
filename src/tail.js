// import './index.css';

// function Tail() {
//     const colors = {
//         slate: [
//           { value: 50, code: '#f8fafc' },
//           { value: 100, code: '#f1f5f9' },
//           { value: 200, code: '#e2e8f0' },
//           { value: 300, code: '#cbd5e1' },
//           { value: 400, code: '#94a3b8' },
//           { value: 500, code: '#64748b' },
//           { value: 600, code: '#475569' },
//           { value: 700, code: '#334155' },
//           { value: 800, code: '#1e293b' },
//           { value: 900, code: '#0f172a' },
//           { value: 950, code: '#020617' },
//         ],
//         gray: [
//           { value: 50, code: '#f9fafb' },
//           { value: 100, code: '#f3f4f6' },
//           { value: 200, code: '#e5e7eb' },
//           { value: 300, code: '#d1d5db' },
//           { value: 400, code: '#9ca3af' },
//           { value: 500, code: '#6b7280' },
//           { value: 600, code: '#4b5563' },
//           { value: 700, code: '#374151' },
//           { value: 800, code: '#1f2937' },
//           { value: 900, code: '#111827' },
//           { value: 950, code: '#030712' },
//         ],
//         zinc: [
//           { value: 50, code: '#fafafa' },
//           { value: 100, code: '#f4f4f5' },
//           { value: 200, code: '#e4e4e7' },
//           { value: 300, code: '#d4d4d8' },
//           { value: 400, code: '#a1a1aa' },
//           { value: 500, code: '#71717a' },
//           { value: 600, code: '#52525b' },
//           { value: 700, code: '#3f3f46' },
//           { value: 800, code: '#27272a' },
//           { value: 900, code: '#18181b' },
//           { value: 950, code: '#09090b' },
//         ],
//         neutral: [
//           { value: 50, code: '#fafafa' },
//           { value: 100, code: '#f5f5f5' },
//           { value: 200, code: '#e5e5e5' },
//           { value: 300, code: '#d4d4d4' },
//           { value: 400, code: '#a3a3a3' },
//           { value: 500, code: '#737373' },
//           { value: 600, code: '#525252' },
//           { value: 700, code: '#404040' },
//           { value: 800, code: '#262626' },
//           { value: 900, code: '#171717' },
//           { value: 950, code: '#0a0a0a' },
//         ],
//         stone: [
//           { value: 50, code: '#fafaf9' },
//           { value: 100, code: '#f5f5f4' },
//           { value: 200, code: '#e7e5e4' },
//           { value: 300, code: '#d6d3d1' },
//           { value: 400, code: '#a8a29e' },
//           { value: 500, code: '#78716c' },
//           { value: 600, code: '#57534e' },
//           { value: 700, code: '#44403c' },
//           { value: 800, code: '#292524' },
//           { value: 900, code: '#1c1917' },
//           { value: 950, code: '#0c0a09' },
//         ],
//       };
      
//       return (
//         <div className="bg-gray-900 px-10 py-20">
//       <div className="">
//         {Object.keys(colors).map((element, index) => (
//           <div key={index} className="col-span-1  mb-5">
//             <h2 className="font-bold mb-3 capitalize text-white">{element}</h2>
//             <ul className="flex gap-5">
//               {colors[element]?.map((item, itemIndex) => (
//                 <li key={itemIndex} className="text-gray-500 text-sm ">
//                   <p
//                     className={`w-24 h-16 rounded-md border border-opacity-[0.2]`}
//                     style={{ backgroundColor: item?.code }}
//                   ></p>
//                   <h1 className="text-sm mt-1 font-medium"> {item?.value}</h1>
//                   {item?.code}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//       )
// }
// export default Tail;