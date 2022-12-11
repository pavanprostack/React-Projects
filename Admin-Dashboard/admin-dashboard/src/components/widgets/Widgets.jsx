import React from 'react'
import '../widgets/widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widgets = ({ type }) => {

    let data;
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "see all users",
                icon: <PersonOutlinedIcon className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(255, 0, 0,0.2)"
                    }} />
            }
            break;
        case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all users",
                icon: <ShoppingCartOutlinedIcon className='icon'
                    style={{
                        color: "blue",
                        backgroundColor: "rgba(190, 200, 250,0.9)"
                    }} />
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "view ne earnings",
                icon: <MonetizationOnOutlinedIcon className='icon'
                    style={{
                        color: "green",
                        backgroundColor: "rgba(0, 250, 0,0.5)"
                    }} />
            }
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className='icon'
                    style={{
                        color: "crimson",
                        backgroundColor: "rgba(128, 0, 128,0.5)"
                    }} />
            }
            break;
        default:
            break;
    }

    return <>
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    </>
}

export default Widgets