import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

type ProductsCardProps = {
  content: string;
  className:string;
  name:string;
  role:string
  logo:string
};

const EffortsCard: React.FC<ProductsCardProps> = (props) => {
  return (
    <Card className={`w-[300px] h-[340px] max-md:w-full  ${props.className}`}>
      <CardHeader>
        <CardTitle className='text-sm text-gray-500'> {props.content}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
            <div>
        </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div>
        <p className='text-gray-500'>{props.name}</p>

        <p className='text-xl font-bold'>{props.role}</p>

        </div>
      <div className='border inline-block '>
            <Image src={props.logo} alt='Logo' width={70} height={70} className='font-bold  p-2'/>
        </div>

      </CardFooter>
    </Card>
  );
}

export default EffortsCard;
