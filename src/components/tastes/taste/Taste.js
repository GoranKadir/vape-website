import React, { useEffect, useState } from "react";

export const Taste = ({ imgUrl, title, id}) => {
    const [img, setImg] = useState();

    useEffect(() => {
        import(`../../../assets/${imgUrl}.png`).then((im) => {
            setImg(im.default);
        });
    }, []);

    return (
        <div class="modal fade" id={id}>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title text-center">{title}</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src={img} alt="bild" className="img-fluid" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>
    );
}