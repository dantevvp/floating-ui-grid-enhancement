import React from 'react';

export default function Layout(props) {
  return (
    <div className="container mx-auto my-[200px] h-full">
      {props.children}
    </div>
  );
}
