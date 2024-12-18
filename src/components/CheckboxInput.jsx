export default function CheckboxInput({ state, setState }) {
  return (
    <input
      type="checkbox"
      checked={state}
      onChange={(evt) => setState(evt.target.checked)}
    />
  );
}
