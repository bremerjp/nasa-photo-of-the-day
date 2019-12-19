import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  Input
} from "reactstrap";

const PhotoCard = props => {
  const { imageUrl, title, date, description, changeDate, imageHDUrl } = props;

  let i = "";

  const change = event => {
    i = event.target.value;
  };

  return (
    <div>
      <Card className="p-3 w-75 mx-auto">
        <CardImg src={imageUrl} alt={title} />
        <CardBody>
          <CardTitle className="display-5 font-weight-bold">{title}</CardTitle>
          <CardSubtitle className="text-muted">Date: {date}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button
            onClick={() => window.open(imageHDUrl)}
            className="button w-75"
          >
            View Full Image
          </Button>
          <Form className="m-3 w-75 mx-auto">
            <Input
              className="mt-3 text-center"
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={change}
            />
            <Input
              className="mt-3"
              type="submit"
              value="Change Date"
              onClick={e => changeDate(e, i)}
            />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
export default PhotoCard;
