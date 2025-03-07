export default function Grid() {
  return (
    <>
      <div className="grid-cols-5">
        <div className="bg-red-700 w-20 h-11 text-white flex justify-center items-center ">
          빨간색
        </div>
        <div className="bg-amber-400 w-20 h-11 text-white flex justify-center items-center ">
          노란색
        </div>
        <div className="bg-blue-600 w-20 h-11 text-white flex justify-center items-center ">
          파란색
        </div>
        <div className="bg-green-700 w-20 h-11 text-white flex justify-center items-center ">
          초록색
        </div>
      </div>
    </>
  );
}
