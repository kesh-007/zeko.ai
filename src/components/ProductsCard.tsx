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
    <Card className={`w-[300px] max-md:w-full max-md:h-[300px] h-[300px] ${props.className}`}>
      <CardHeader>
        <CardTitle className='flex gap-3'><p>{props.icon}</p> <p>{props.heading}</p></CardTitle>
      </CardHeader>
      <CardContent>
        <p className='font-semibold'>{props.content}</p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}

export default ProductsCard;
