import React from "react";
import axios from "axios";
import '../components/PriceBoard//Table/Table.scss';

const getReactResults = () =>
    axios.get('https://online.bvsc.com.vn/datafeed/instruments?symbols=ACB,BID,BVH,CTG,FPT,GAS,GVR,HDB,HPG,KDH,MBB,MSN,MWG,NVL,PDR,PLX,PNJ,POW,SAB,SSI,STB,TCB,TPB,VCB,VHM,VIC,VJC,VNM,VPB,VRE').then(res =>
        res.data.d
    );

export default class VN30 extends React.Component {
    state = { results: [] };

    componentDidMount() {
        getReactResults().then(results => {
            this.setState({ results });
        });
    }

    render() {
        return (
            <>
                {this.state.results?.map((item, i) => (
                    <>
                        <tbody>
                        <tr key={i}>
                                <td className="td-symbol" scope="row"  title={item.FullName}>{item.symbol}</td>
                                <td className="td-thamchieu">{(Math.round(item.reference * 100) / 100).toLocaleString()}</td>
                                <td className="td-tran">{(Math.round(item.ceiling * 100) / 100).toLocaleString()}</td>
                                <td className="td-san">{(Math.round(item.floor * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidPrice3 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidVol3 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidPrice2 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidVol2 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidPrice1 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.bidVol1 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.closePrice * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.closeVol * 100) / 1000).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.change * 100) / 100000).toLocaleString()}%</td>
                                <td className="red-color">{(Math.round(item.offerPrice1 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.offerVol1 * 100) / 1000).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.offerPrice2 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.offerVol2 * 100) / 1000).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.offerPrice3 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.offerVol3 * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.totalTrading * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.high * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.averagePrice * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.low * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.foreignBuy * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.foreignSell * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.TOTAL_OFFER_QTTY * 100) / 100).toLocaleString()}</td>
                                <td className="red-color">{(Math.round(item.TOTAL_BID_QTTY * 100) / 100).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </>
                ))}

            </>
        );
    }
}