import Alert from "../components/Alert";
import Button from "../components/Button";
import Card from "../components/Card";

const Components = () => {
  return (
    <>
      <div className="bg-gray-500">
        <Card header="Hai" footer="bye">
          <p>This is a card</p>
          <div className="pt-12 ">
            <Button textSize="text-xs">This is a button</Button>
          </div>
        </Card>
      </div>
      <br />
      <Alert
      message='You have successfully made an alert'
      />
     
    </>
  );
};

export default Components;
