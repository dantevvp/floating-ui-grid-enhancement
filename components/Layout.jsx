import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from '/components/Header';
import { NavigableContainer } from '/utils/navigation';
import { Navigable } from '/components/navigation/Navigable';

export default function Layout(props) {
  return (
    <div className="container mx-auto my-[200px] h-screen">
      {props.children}
    </div>
  );
}
