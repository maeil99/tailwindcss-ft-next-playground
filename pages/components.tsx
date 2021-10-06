import Alert, { AlertColor } from "../components/Alert";
import Badge, { BadgeType } from "../components/Badges";
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
        message="You have successfully made an alert"
        type={AlertColor.SUCCESS}
      />
      <Alert
        message="You have successfully made an alert"
        type={AlertColor.WARNING}
      />
      <Alert
        message="You have successfully made an alert"
        type={AlertColor.ERROR}
      />

      <br />
      <div className="py-24 flex items-center justify-center bg-gray-200 space-x-4">
        <div className="inline-flex space-x-2">
          <p>Hello</p> <Badge text="New" type={BadgeType.INLINE} />
        </div>
        <Badge
          text="Pill"
          type={BadgeType.PILL}
          bgColor="bg-purple-500"
          textColor="text-purple-100"
        />
        <Badge
          text="Notification"
          type={BadgeType.BUTTON}
          notiText='100'
        />
        <Badge
          text="Corner"
          type={BadgeType.CORNER}
          notiText='99+'
        />
        <Badge
          text="Indicate"
          type={BadgeType.INDICATOR}
        />
      </div>
    </>
  );
};

export default Components;
