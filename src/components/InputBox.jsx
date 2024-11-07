function InputBox ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
  Input Box
    </div>
  );
};

export default InputBox;