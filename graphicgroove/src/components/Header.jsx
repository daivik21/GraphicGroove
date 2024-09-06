// src/components/Header.jsx

import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '3rem',
  margin: '1rem',
}));

const Icon = styled(Box)(({ theme }) => ({
  width: '3rem',
  height: '3rem',
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: '700',
}));

const Header = () => {
  return (
    <HeaderContainer>
      <Icon>
        <FormatAlignRightIcon />
      </Icon>
      <HeaderTitle>T & M</HeaderTitle>
      <Icon>
        <ShoppingCartIcon />
      </Icon>
    </HeaderContainer>
  );
};

export default Header;
