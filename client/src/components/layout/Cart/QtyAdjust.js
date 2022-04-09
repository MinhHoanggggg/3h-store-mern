

const QtyAdjust = ({qty, idItem}) => {

    return (
        <>
            <div className="js-qty">
                <button
                    type="button" className="js-qty__adjust js-qty__adjust--minus icon-fallback-text" data-id="" data-qty="0">
                    <span className="fallback-text" aria-hidden="true">−</span>
                </button>

                <input type="text" class="js-qty__num" value={qty} min="1" data-id="" aria-label="quantity" pattern="[0-9]*" name="updates[]" id="updates_" />
                                            
                <button type="button" class="js-qty__adjust js-qty__adjust--plus icon-fallback-text" data-id="" data-qty="11">
                    <span className="fallback-text" aria-hidden="true">+</span>
                </button>
            </div>
        </>
    )
}

export default QtyAdjust