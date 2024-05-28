import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductsCardProps = {
  icon: React.ReactNode;
  heading: string;
  content: string;
  className:string
};

const ProductsCard: React.FC<ProductsCardProps> = (props) => {
  return (
    <Card className={`w-[250px] max-md:w-full max-md:h-[300px] h-[250px] ${props.className}`}>
      <CardHeader>
        <CardTitle>{props.icon} {props.heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default ProductsCard;
