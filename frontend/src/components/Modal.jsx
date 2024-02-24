
function Modal({onSubmit, onClose, onCancle, children}) {
  return (
    <>
        <div className="bg-blueShade text-whiteText h-36 ">
            <div className="">
                <p onClick={()=> onclose()}>&times;</p>
            </div>
            <div className="">
                {children}
            </div>

            <div className="">
                <button>Ok</button>
            </div>

        </div>
    </>
  )
}

export default Modal