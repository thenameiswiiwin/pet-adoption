import Pet from './Pet';

const App = () => {
  return (
    <div
      className="m-0 p-0"
      style={{
        background: 'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)',
      }}
    >
      <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
        <h1 className="text-6xl text-white hover:text-gray-200">Adopt Me!</h1>
      </header>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};

export default App;
