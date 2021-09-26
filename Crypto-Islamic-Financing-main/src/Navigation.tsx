import { Toolbar, Typography } from '@material-ui/core';
import DisconnectIcon from '@material-ui/icons/LinkOff';
import Button from '@mui/material/Button';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { FC } from 'react';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="absolute" color="inherit" >
        <Toolbar>
            <Typography component="h1" variant="h6" color="secondary" style={{ flexGrow: 1}}>
                CashMe JODC 
            </Typography>

            <WalletMultiButton/>
            {wallet && <WalletDisconnectButton startIcon={<DisconnectIcon />}/>}
        
        <Button
        variant="contained" color="success">
        Network 
      </Button>

        </Toolbar>
        </AppBar>
        </Box>
    );
};

export default Navigation;
