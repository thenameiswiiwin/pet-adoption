const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
_c = Pet;
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Havanese"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cockatiel"
        }),
        React.createElement(Pet, {
            name: "Doink",
            animal: "Cat",
            breed: "Mix"
        }), 
    ]);
};
_c1 = App;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
var _c, _c1;
$RefreshReg$(_c, "Pet");
$RefreshReg$(_c1, "App");

//# sourceMappingURL=index.9e7b1db9.js.map
