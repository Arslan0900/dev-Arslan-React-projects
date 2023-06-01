export type Action = {
  type: "OPENCLOSE";
};
const initialState: boolean = false;

const BtnToggler = (state: boolean = initialState, action: Action) => {
  if (action.type === "OPENCLOSE") {
    state = !state;
  }
  return state;
};
export default BtnToggler;
