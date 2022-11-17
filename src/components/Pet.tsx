interface PetProps {
  name: string;
  animal: string;
  breed: string;
}

const Pet = ({ name, animal, breed }: PetProps) => {
  return (
    <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent pr-2 pt-2">
      <h1>{name}</h1>
      <h2>{`${animal} — ${breed}`}</h2>
    </div>
  );
};

export default Pet;
