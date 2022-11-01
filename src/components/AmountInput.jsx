const AmountInput = (props) => {
  const handleInputChange = (event) => {
    props.amountSetter(+event.target.value);
  };

  const handleMinusClick = () => {
    props.amountSetter(+props.amount - 1);
  };

  const handlePlusClick = () => {
    props.amountSetter(+props.amount + 1);
  };

  return (
    <div className="flex flex-row justify-center px-1 py-1 items-center w-16 h-7 border border-grey shadow-lg col-start-8 col-end-10 row-start-6 row-end-6">
      <div className="flex flex-row justify-around items-center m-2">
        <button className="mx-1" onClick={handleMinusClick}>
          -
        </button>
        <input
          type="number"
          name="amount"
          placeholder="0"
          value={props.amount}
          onChange={handleInputChange}
          className="w-7 text-center"
        />
        <button className="mx-1" onClick={handlePlusClick}>
          +
        </button>
      </div>
    </div>
  );
};

export default AmountInput;
