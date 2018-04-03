import React, { Component }  from 'react';
import {View, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';
import {
	HokkaidoColor,
	TohokuColor,
	ChubuColor,
	KantoColor,
	KansaiColor,
	ChugokuColor,
	ShikokuColor,
	KyushuColor,
	OkinawaColor
} from './common/AppPalette';

const { width, height } = Dimensions.get("window");
const border =  '#000000';
const borderHighlight = '#484848';
const fillHighlight = '#a4a4a4';

class Map extends Component {
	
	static title = 'Hover the svg path';
	
    constructor (props) {
        super(props);
        this.state = {
            hover1: false,
			hover2: false,
			hover3: false,
			hover4: false,
			hover5: false,
			hover6: false,
			hover7: false,
			hover8: false,
			hover9: false,
        };
    }

    toggle1 = () => {
        this.setState({hover1: !this.state.hover1});
    };
	toggle2 = () => {
        this.setState({hover2: !this.state.hover2});
    };
	toggle3 = () => {
        this.setState({hover3: !this.state.hover3});
    };
	toggle4 = () => {
        this.setState({hover4: !this.state.hover4});
    };
	toggle5 = () => {
        this.setState({hover5: !this.state.hover5});
    };
	toggle6 = () => {
        this.setState({hover6: !this.state.hover6});
    };
	toggle7 = () => {
        this.setState({hover7: !this.state.hover7});
    };
	toggle8 = () => {
        this.setState({hover8: !this.state.hover8});
    };
	toggle9 = () => {
        this.setState({hover9: !this.state.hover9});
    };
	
	select1 = () => {
		Actions.mapModal({data: 'Hokkaido'});
		this.toggle1();
	}
	select2 = () => {
		Actions.mapModal({data: 'Tohoku'});
		this.toggle2();
	}
	select3 = () => {
		Actions.mapModal({data: 'Chubu'});
		this.toggle3();
	}
	select4 = () => {
		Actions.mapModal({data: 'Kanto'});
		this.toggle4();
	}
	select5 = () => {
		Actions.mapModal({data: 'Kansai'});
		this.toggle5();
	}
	select6 = () => {
		Actions.mapModal({data: 'Chugoku'});
		this.toggle6();
	}
	select7 = () => {
		Actions.mapModal({data: 'Shikoku'});
		this.toggle7();
	}
	select8 = () => {
		Actions.mapModal({data: 'Kyushu'});
		this.toggle8();
	}
	select9 = () => {
		Actions.mapModal({data: 'Okinawa'});
		this.toggle9();
	}
	
    //renders map 
	render() {
		return (
			<View style={styles.containerStyle}>
				<Svg  width={width} height={height} viewBox="-5 0 240 330" preserveAspectRatio="xMidYMin meet">
					<G
						delayPressIn={0}
						onPressIn={this.select1}
						onPressOut={this.toggle1}
					>
						<Path
							id="Hokkaido"
							d="m 229.85048,44.417412 -4.11616,4.583907 -2.52581,2.338727 -3.08712,0.280648 -2.90003,-1.216139 -1.30969,-1.590336 -2.71292,-1.309687 -1.96453,0.187099 -1.02904,-0.467744 -1.12259,-0.841943 -1.96453,-1.216139 -3.08712,-2.619375 -4.39681,-4.209711 -2.43228,-2.90002 -1.77743,-3.648417 -4.39681,-5.987142 -2.61937,-3.08712 -3.36777,1.309687 -0.93549,1.777433 -0.65485,2.058079 1.02904,3.36777 1.12259,5.612946 -0.46774,3.08712 -1.21614,2.712926 -0.65484,6.735534 -0.7484,1.496787 -2.61937,1.216136 -0.84194,0.841943 -0.0935,1.777432 0.65484,2.33873 0.28065,1.777432 -0.46775,2.151631 -1.59033,1.777431 -1.49679,0.561296 -1.30968,-0.935492 -1.30969,-0.841943 -1.49679,0.561296 -2.24518,-1.216139 -1.77743,-1.683884 -2.24518,1.02904 v 1.777434 l 2.15163,2.993571 -1.49678,1.496785 -1.96454,2.712926 -1.12259,-0.654844 -1.77743,1.403236 -2.80647,0.935491 -0.46775,2.900023 0.28065,1.122588 -1.21614,1.683884 -0.28065,1.309687 2.43228,2.712926 1.12259,0.374196 1.02904,1.964531 -0.28065,2.525827 -2.24517,3.274219 0.28064,2.619375 0.65484,1.496784 1.68389,0.935491 0.93549,-1.029039 0.74839,-0.654844 1.21614,-0.1871 0.65484,-0.654843 -0.0935,-1.309688 0.1871,-1.122588 1.49678,-0.561295 1.02904,-0.841941 0.3742,-1.122591 0.65484,1.02904 1.02904,0.467747 1.59034,-0.09355 1.02904,0.935492 2.71292,-1.870981 -1.87098,-1.590335 -3.92907,-4.303258 -2.61937,-0.09355 -2.33873,-2.338728 -0.65484,-0.935491 2.15163,-4.116159 1.68388,-0.374196 1.49679,0.09355 1.21614,1.216139 1.40323,1.403236 0.46775,2.05808 0.93549,0.561295 3.18067,-2.619375 3.83551,-2.338727 1.77744,-0.374196 1.77743,0.561292 3.08712,2.058083 2.15163,1.496784 1.96453,1.964531 3.55487,2.05808 4.771,2.15163 2.90002,2.993571 1.30969,-3.554866 0.1871,-2.993571 1.77743,-4.022611 4.20971,-4.116162 2.61938,-1.964531 3.36776,-2.245179 1.12259,0.187099 0.65485,1.496785 3.4613,0.841943 1.30969,-0.467745 -0.56128,-1.683886 1.30969,-1.496784 1.30969,0.280648 0.1871,0.561292 -0.84195,1.870983 0.56128,0.374196 1.77746,-1.964531 1.02902,-1.02904 v -0.84194 l 4.86457,-0.748395 0.56128,-0.374196 -0.46774,-0.84194 -2.61938,-0.841944 -0.5613,-2.806474 -0.74838,-2.151628 -0.0935,-0.841943 -1.49679,-2.619375 3.46132,-7.858125 0.37418,-1.590335 z"
							stroke={this.state.hover1 ?  borderHighlight : border}
							fill={this.state.hover1 ? fillHighlight : HokkaidoColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover1 ? borderHighlight : border}
							stroke={this.state.hover1 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="99.646889"
							y="45"
						>HOKKAIDO</Text>
						<Path
							d="m 131.9277,48.543578 40.74791,7.673307"
							stroke={this.state.hover1 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
				
					<G
						delayPressIn={0}
						onPressIn={this.select2}
						onPressOut={this.toggle2}
					>	
						<Path
							id="Tohoku"
							d="m 171.35263,91.540561 -1.45528,4.365848 -0.5292,2.778266 1.45528,-0.264596 2.24908,-0.793791 1.85218,-1.190684 1.19068,1.322984 -0.3969,2.910562 -1.45528,2.51367 -2.77826,-2.24907 -1.32299,0.2646 -0.1323,1.85217 -2.11677,0.3969 -0.39689,-4.895041 0.13229,-1.322986 -1.05839,-0.661492 -1.19068,1.058387 -1.45528,-1.719879 -0.3969,1.719879 -0.79379,0.529195 0.52919,2.513667 -1.32298,3.70436 -1.45528,0.2646 h -1.85218 l -1.45528,2.51366 1.05839,3.30746 0.13229,1.98448 -0.39689,2.51367 -0.5292,1.45528 -1.71987,1.45529 -1.85218,-0.3969 0.79379,2.38137 v 0.3969 l 2.38137,-0.92609 1.19069,3.30746 0.26459,3.43976 -1.05839,2.51367 -1.71987,2.24907 -0.7938,4.76274 -2.24907,3.83666 -1.85218,1.19068 0.1323,1.85218 0.92609,1.05839 0.52919,1.98447 1.45529,0.9261 0.39689,1.45528 -2.51367,1.45528 -1.05838,4.10125 1.05838,1.85218 -2.24907,2.77827 -0.79379,1.71987 -5.02734,1.85218 0.1323,3.43976 0.92609,3.30746 -0.3969,1.45528 1.32299,0.6615 3.17516,-1.58759 2.77826,-1.19068 2.24908,-0.66149 3.17516,1.71988 1.71988,3.17516 2.11677,1.45528 1.98448,-1.71988 3.04286,1.85218 0.92609,-1.58758 1.45528,-0.3969 1.05839,-3.04286 0.2646,-5.68883 0.1323,-5.02734 -1.05839,-3.96895 v -2.77827 l 1.98448,-1.98448 0.39689,-0.13229 -0.1323,-2.24908 h 2.91057 l 1.85217,0.2646 1.45529,1.98448 1.05838,-0.6615 -1.19068,-2.77827 0.66149,-1.19068 -1.45528,-0.79379 1.32298,-0.79379 v -2.24907 l 0.66149,-1.32299 1.19069,-0.52919 -0.26459,-1.71988 1.98447,-0.1323 2.11677,-2.24907 0.7938,-1.58758 -0.1323,-2.91057 1.19068,-1.45528 0.1323,-1.85218 -0.66149,-2.38137 v -3.70436 l -0.66149,-2.38137 -0.92609,-1.05839 0.1323,-1.05838 -0.79379,-0.79379 v -2.51367 l -2.11678,-2.77827 -2.24907,-1.98448 v -2.91056 l -0.52919,-4.49815 0.92608,-4.630441 0.2646,-2.249074 -1.85218,1.058387 -2.11677,-1.190687 z"
							stroke={this.state.hover2 ? borderHighlight :border}
							fill={this.state.hover2 ? fillHighlight : TohokuColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover2 ? borderHighlight :border}
							stroke={this.state.hover2 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="114.19971"
							y="104"
						>TOHOKU</Text>
						<Path
							d="m 132.98609,107.28407 v 14.02364 l 21.69694,6.08572"
							fill='none'
							stroke={this.state.hover2 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select3}
						onPressOut={this.toggle3}
					>
						<Path
							id="Chubu"
							d="m 135.43361,145.18757 -4.49815,4.432 0.3969,1.65373 0.92609,-0.19845 -0.92609,3.04286 2.11677,-0.19844 2.64597,-2.84442 -0.19845,-1.58758 -0.99224,0.0661 z m 15.41276,-4.5643 0.1323,1.85218 0.92609,1.05839 0.52919,1.98447 1.45529,0.9261 0.39689,1.45528 -2.51367,1.45528 -1.05838,4.10125 1.05838,1.85218 -2.24907,2.77827 -0.79379,1.71987 -5.02734,1.85218 0.1323,3.43976 0.92609,3.30746 -0.3969,1.45528 -2.87749,-1.05838 -1.78603,2.31522 -2.36968,1.91336 -0.83855,0.96413 -2.54675,-0.16537 -1.45528,1.38913 -0.66149,1.88525 2.64597,1.81911 -0.36383,4.92811 1.38914,3.47284 3.14208,1.85217 2.44753,3.14209 0.0331,1.35606 -2.216,1.6868 -1.25683,0.95917 0.76071,1.38913 -0.0662,2.51367 2.18293,1.52143 0.42997,2.91057 -1.22376,2.38137 -1.62066,1.35606 -0.23152,1.19068 -1.62066,1.28991 -1.58758,-1.22376 0.16538,-2.24907 0.42996,-3.00979 0.49612,-1.22376 1.09147,-0.1323 -0.5292,-1.32298 -2.51367,-0.3969 -2.34829,1.68681 -2.77827,2.74519 -2.01755,2.97671 0.33074,1.71988 -2.11677,-1.28991 -4.438,-0.4642 -4.06939,-1.1226 -3.69519,0.98227 -3.04034,0.42097 0.28065,-1.45001 2.75969,-0.23387 1.49679,-1.12259 -0.28065,-1.07582 -1.68388,0.28065 -1.45001,0.14032 -1.77743,-2.1984 -0.42097,1.82421 0.18709,1.30969 -0.28065,0.42097 -1.45001,-2.01131 0.32743,-3.22744 0.56129,-1.40324 -0.98226,0.70162 -1.21614,-0.5613 -2.3855,-3.74196 -0.98227,-0.46774 -0.51452,-3.46132 -0.70162,-2.29196 -1.02904,-1.02904 -5.478333,2.05412 -0.926088,2.64597 -1.984478,-0.9261 -2.778266,-1.85217 v -0.92609 l 1.984475,0.92609 1.091462,-0.1323 0.363821,-1.38913 1.256836,0.0331 0.363821,-1.05839 1.389133,0.0661 1.124537,-2.24907 0.859938,1.9514 0.595345,-2.0837 -1.157612,-1.52143 v -2.41445 l 2.249071,-2.94364 4.299698,-3.07594 4.46444,-5.06581 1.63711,-4.86456 -0.56129,-3.22744 1.02904,-2.7597 1.40323,-1.21614 2.61938,-0.56129 2.85325,-1.16937 h 1.40323 l 0.65485,0.93549 -0.23388,0.88872 -1.21613,0.28065 -0.23388,2.05808 -1.77743,0.28064 -1.63711,1.30969 -1.30969,-0.70162 -1.12259,1.30969 0.1871,1.35646 2.24518,0.60807 0.0468,1.02904 -1.1226,2.10486 0.51453,1.30969 4.35003,0.51451 1.12259,-2.10485 3.04034,-1.02904 3.41455,-0.84194 2.94679,-1.49679 3.41455,-0.93549 3.41454,-2.80647 2.94679,-3.321 1.59034,-3.50809 3.78874,-2.61937 3.08712,-0.74839 2.05808,-3.1339 -0.32742,-2.15163 1.26291,-2.3855 z"
							stroke={this.state.hover3 ? borderHighlight :border}
							fill={this.state.hover3 ?   fillHighlight : ChubuColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover3 ?  borderHighlight :border}
							stroke={this.state.hover3 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="85.048386"
							y="140.09407"
						>CHUBU</Text>
						<Path
							d="m 104.49469,142.45688 5.23875,14.93044"
							fill='none'
							stroke={this.state.hover3 ?  borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select4}
						onPressOut={this.toggle4}
					>
						<Path
							id="Kanto"
							d="m 165.92839,173.56558 -3.04286,-1.85218 -1.98448,1.71988 -2.11677,-1.45528 -1.71988,-3.17516 -3.17516,-1.71988 -2.24908,0.66149 -5.95342,2.77827 -1.32299,-0.6615 -2.87749,-1.05838 -1.78603,2.31522 -2.36968,1.91336 -0.83855,0.96413 -2.54675,-0.16537 -1.45528,1.38913 -0.66149,1.88525 2.64597,1.81911 -0.36383,4.92811 1.38914,3.47284 3.14208,1.85217 2.44753,3.14209 0.0331,1.35606 -3.47283,2.64597 0.76071,1.38913 -0.0662,2.51367 2.18293,1.52143 2.8279,-2.9271 3.07594,0.1323 0.67802,1.28991 0.29767,0.7111 1.73642,0.11576 0.24806,-0.62841 -1.09146,-1.67027 1.25683,-2.96018 0.81033,-2.01755 1.38914,-0.66149 2.13331,-0.24806 1.04185,1.22376 -0.84341,1.70334 -1.52143,1.43875 -1.65373,0.9757 -0.66149,0.33074 0.99224,1.75296 -0.42997,1.04185 -0.2646,3.30746 -1.32298,0.24806 0.18191,0.76071 2.69558,0.76072 3.17516,-3.67128 2.0837,0.0827 1.38913,-1.00877 0.87648,-3.0594 0.0165,-2.0837 1.07348,-1.51293 2.10485,-1.4734 3.1339,-0.74839 -1.45001,-2.59599 -1.70727,-4.35003 -0.5613,-3.50809 0.95888,-2.9468 1.77744,-4.81778 z"
							stroke={this.state.hover4 ?  borderHighlight :border}
							fill={this.state.hover4 ? fillHighlight : KantoColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover4 ?  borderHighlight :border}
							stroke={this.state.hover4 ?  borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="174.2632"
							y="185.07555"
						>KANTO</Text>
						<Path
							d="m 173.4694,181.63578 h -8.99629"
							fill='none'
							stroke={this.state.hover4 ?  borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select5}
						onPressOut={this.toggle5}
					>
						<Path
							id="Kansai"
							d="m 79.901347,205.5818 -2.348296,1.45528 -2.050625,2.54674 -0.231524,1.75296 0.926091,1.02531 2.315221,-1.15761 -0.09922,-2.31522 1.52143,-1.85218 0.694566,-0.82687 z m 24.523173,-3.00793 1.28629,-2.2101 -2.3855,-3.74196 -0.98227,-0.46774 -0.51452,-3.46132 -0.70162,-2.29196 -1.02904,-1.02904 -5.478332,2.05412 -0.926087,2.64597 -1.984478,-0.9261 -2.778266,-1.85217 v -0.92609 l -0.621408,-1.27136 -1.710334,0.74216 -0.661492,0.11577 -0.347284,-1.20723 1.058387,-2.39791 -1.488355,-1.00877 -4.006025,1.55256 -2.993571,-0.37419 -4.63068,0.23387 0.561292,1.63711 1.262914,4.02261 -2.104854,1.91776 -1.917757,2.1984 -0.841943,1.73066 0.748394,3.92906 4.490356,-0.51452 4.116162,2.90002 h 3.508092 l 1.122588,-0.70161 1.824209,0.65484 0.374196,1.49679 -1.216139,1.87098 -1.63711,1.54356 -3.367767,1.30968 1.216137,2.15164 -0.561293,1.35646 -0.420973,0.37419 0.60807,1.12259 -1.262914,0.65485 -0.04677,1.30968 1.496787,1.26292 0.374196,0.98226 1.683883,0.93549 0.374197,0.46775 -0.09355,1.49678 0.701618,1.40324 2.05808,1.21614 2.245179,0.65484 0.608069,0.70162 1.543561,0.14033 0.841941,-2.05809 2.058082,-3.13389 0.748392,-1.45001 2.011306,-1.91776 0.233873,-2.05808 1.02904,-0.1871 0.42097,-1.16936 1.777431,-0.74839 4.53713,-0.98227 1.21614,1.30969 1.02904,-0.14033 0.32742,-0.88871 0.23387,-2.5726 -1.87098,-1.49679 -2.0113,-1.26291 -0.5613,0.0468 -0.3742,-2.52583 z"
							stroke={this.state.hover5 ? borderHighlight :border}
							fill={this.state.hover5 ? fillHighlight : KansaiColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover5 ? borderHighlight :border}
							stroke={this.state.hover5 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="92.78082"
							y="235.25584"
						>KANSAI</Text>
						<Path
							d="m 100.30369,216.32325 10.73944,10.21557"
							fill='none'
							stroke={this.state.hover5 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select6}
						onPressOut={this.toggle6}
					>
						<Path
							id="Chugoku"
							d="m 67.299924,187.73805 6.230013,-0.98567 1.824204,5.65972 -4.022611,4.11616 -0.841943,1.73066 0.748394,3.92906 -1.589761,0.20212 -1.653729,2.0837 -1.207223,-0.49612 -0.512656,1.91833 -1.670269,0.54573 -3.042862,-1.86872 -1.719882,0.56227 -0.711102,0.0992 -1.058388,-0.38036 -1.306447,1.67027 -1.289908,0.51266 -0.429971,-1.38913 -1.058387,0.4465 -0.446507,0.72764 0.314207,0.94263 -1.438744,-0.23152 -2.44752,-0.69457 -1.885253,0.1323 -2.116775,1.55451 -1.455283,-0.42997 -0.760716,-2.77827 -1.786029,-0.29767 -1.289908,1.75295 -1.686804,2.57982 -0.529195,2.57982 -1.091463,2.41445 -1.653729,-2.4806 -1.819103,-1.15761 -1.620655,-0.82686 -0.661494,-0.95917 c 0,0 -1.45528,0.72764 -1.620655,0.76072 -0.165374,0.0331 -1.488357,-0.92609 -1.488357,-0.92609 l -0.959163,0.76071 -2.182924,0.89302 -1.852179,-1.09146 -1.719879,-1.52143 -0.628417,1.58757 -1.223761,-0.33074 0.198449,-1.19069 -0.661492,-1.58758 1.091462,-0.42997 -0.132299,-3.70435 c 0,0 2.116775,-1.32299 2.348296,-1.32299 0.231524,0 2.51367,1.22376 2.712119,1.28991 0.198446,0.0661 2.546742,-0.36382 2.546742,-0.36382 l 2.877491,-2.81134 1.752954,-1.02531 2.546745,-0.33075 4.167402,-3.60513 7.243337,-4.66352 2.381371,-0.92609 -0.859939,-1.09146 0.03307,-0.59534 4.762742,-0.99224 1.289911,-0.56227 4.10125,0.23152 0.297671,0.3969 -0.496118,0.89301 0.694567,0.79379 2.414445,-0.85994 z"
							stroke={this.state.hover6 ? borderHighlight :border}
							fill={this.state.hover6 ? fillHighlight : ChugokuColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover6 ? borderHighlight :border}
							stroke={this.state.hover6 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="34.708969"
							y="166.56439"
						>CHUGOKU</Text>
						<Path
							d="M 55.512375,182.79525 V 168.38869"
							fill='none'
							stroke={this.state.hover6 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select7}
						onPressOut={this.toggle7}
					>
						<Path
							id="Shikoku"
							d="m 73.904131,211.07515 -3.180671,-0.28065 -1.637109,-1.82421 -2.712924,-1.30968 -3.18067,0.32742 -2.198405,1.40323 -1.496784,0.0936 0.140323,1.96453 -0.935492,1.49679 -4.583906,0.42097 -2.011305,0.65484 -1.02904,-1.45001 -0.935492,-1.54356 -2.291953,0.14033 -1.262913,1.59033 0.04677,0.51452 -1.075814,0.0468 -0.04677,1.96453 -1.403236,1.77743 -2.572601,0.93549 -1.543561,1.45001 -3.929062,1.59034 -0.701618,0.84194 2.245179,-0.5613 2.619375,-0.74839 0.233871,1.82421 -0.420971,0.70162 1.590336,0.65484 -0.280648,1.40324 -0.935492,0.65484 -0.654843,1.40324 -0.233871,0.74839 0.935489,0.46775 -0.140323,1.26291 v 0.93549 l 1.356462,-0.32742 0.608069,0.56129 0.327422,0.5613 -0.42097,1.45001 0.84194,0.70162 0.561296,-0.23388 0.467744,0.5613 h 1.30969 l 0.841941,-0.28065 0.42097,0.84195 c 0,0 0.60807,0.60806 0.841943,0.56129 0.233874,-0.0468 1.075814,-0.74839 1.075814,-0.74839 l -0.654844,-1.45001 0.374196,-1.16937 0.04678,-1.45001 1.216137,-0.79517 0.608069,-1.16936 1.964531,-1.02904 0.701618,-1.16937 0.467747,-1.91775 2.385502,-1.21614 2.05808,-0.79517 2.7597,0.0935 1.87098,0.74839 2.993574,5.00488 1.122588,0.28065 0.374196,-1.21614 0.140325,-1.54356 1.730658,-2.61938 1.870983,-1.73065 3.040345,-1.73066 1.683883,-0.93549 -0.140322,-0.5613 -0.654844,-0.37419 -0.04678,-1.35647 -0.233871,-1.35646 -0.467747,-0.98226 0.841944,-1.73066 -0.467748,-1.02904 z"
							stroke={this.state.hover7 ? borderHighlight :border}
							fill={this.state.hover7 ? fillHighlight : ShikokuColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover7 ? borderHighlight :border}
							stroke={this.state.hover7 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="38.789612"
							y="244.87442"
						>SHIKOKU</Text>
						<Path
							d="m 59.957363,236.14273 -2.64597,-11.11307"
							fill='none'
							stroke={this.state.hover7 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select8}
						onPressOut={this.toggle8}
					>
						<Path
							id="Kyushu"
							d="m 20.879716,210.74144 c 0,0.0661 0.281135,-1.35609 0.281135,-1.35609 l -1.223761,-0.33074 -0.545731,0.49614 -2.050625,-1.17415 -0.793791,-0.0496 -0.711103,1.14107 -2.315224,-0.24806 -0.777252,1.85218 -0.909552,1.2403 -0.843402,1.27337 -0.595342,0.31421 -0.7772548,-0.49612 -0.396893,-1.55451 -1.8191035,0.5292 c 0,0 -0.4299704,0.33074 -0.4134343,0.44651 0.016528,0.11576 0.3638207,1.65372 0.3638207,1.65372 L 6.21113,214.92538 5.8638454,215.5538 4.9377575,214.80962 4.9212295,213.3378 4.243199,213.12282 c 0,0 -2.5589722,1.92817 -2.7928457,1.97495 -0.2338709,0.0468 -2.33872731,-0.28065 -2.33872731,-0.28065 l -0.84194049,1.45001 -1.6371094,1.59034 2.2451764,1.07581 0.65484372,1.77744 -0.93548882,1.02904 -0.1870993,1.73065 0.79516625,1.77744 1.12259078,1.63711 0.74839207,0.56129 -0.79516625,1.68388 -1.0758166,1.21614 1.49678683,0.51452 1.02903982,-1.45001 1.4500126,-1.35646 1.5903326,-0.84194 1.5903352,0.60807 -0.8419405,1.68388 0.7483922,1.16937 2.0580796,-1.16937 0.9822656,-1.40324 -0.2806477,-2.0113 -1.3564617,-0.5613 -0.8887146,0.32743 0.1403225,-0.70162 0.7016179,-0.60807 -0.374196,-1.30969 -0.5145212,-1.30969 1.3096875,-1.26291 0.8887172,-0.14032 1.2629128,1.26291 0.374196,2.71292 v 1.16937 l 1.496787,1.8242 0.187097,1.54357 -0.654844,0.79516 -1.637109,0.46775 -0.4677444,1.12259 2.2919534,-0.46775 0.888717,0.0468 -1.590335,1.96453 -1.4032387,2.5726 -1.4967842,1.82421 -1.7306577,1.87098 -1.5903352,-1.96453 0.7951663,-2.29196 0.7016179,-1.35646 -0.5612928,-2.05808 -2.0580822,0.14032 -0.7483921,1.30969 -0.7951663,1.77744 -0.2338735,1.87098 1.9645313,2.47905 0.1870967,1.68388 -0.046774,2.71293 -0.1870967,1.82421 1.5903352,2.33872 -0.093551,1.30969 -1.3096875,2.05808 -2.151628,-0.3742 0.8887147,1.59034 0.3741986,1.68388 2.9935711,0.28065 1.5435584,1.77743 1.0290424,0.28065 0.7951663,-0.42097 v -1.21614 l -1.3564617,-2.33873 0.3274219,-2.90002 1.5903348,-2.47905 1.543558,-0.0468 1.029043,0.93549 -0.561296,1.35646 -1.12259,1.30969 -0.280645,0.84194 0.701617,1.07581 0.280648,1.35647 -0.514521,1.68388 -0.888717,2.0113 -1.3564616,1.59034 2.4322776,-0.65484 2.90002,-1.40324 1.730661,-0.79517 0.514518,-1.12259 -0.561292,-1.12259 -0.841944,-0.65484 1.683884,-0.98227 1.309688,0.51452 1.590335,1.82421 1.309687,-1.63711 0.561296,-1.77743 0.84194,-1.07581 0.60807,-2.10486 0.09355,-3.22745 1.356464,-2.94679 2.245177,-3.88229 2.011308,-3.13389 1.45001,-2.19841 1.777432,-1.49678 1.216139,-0.88872 0.561295,-0.98227 0.935492,-0.46774 -1.21614,-0.65485 -0.888717,-0.79516 1.122591,-0.7484 -1.216139,-0.88871 -0.233874,-0.65485 -0.748392,-0.51452 1.02904,-1.40323 -2.666157,-0.79517 -1.496787,0.1871 -1.169362,-0.42097 -0.09355,-1.26292 1.683884,-0.18709 1.075814,-0.51452 0.982266,-0.32743 0.187099,-2.33872 -0.187099,-1.82421 -1.262914,-0.98227 -1.683883,0.23388 -2.338728,1.54356 -2.198404,-1.16937 -1.543561,-1.40323 -0.982266,-2.10486 z"
							stroke={this.state.hover8 ? borderHighlight :border}
							fill={this.state.hover8 ? fillHighlight : KyushuColor}
							strokeWidth="1"
						/>
						<Text
							fill={this.state.hover8 ? borderHighlight :border}
							stroke={this.state.hover8 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="0"
							y="185.07555"
						>KYUSHU</Text>
						<Path
							d="m 7.5671883,187.45691 0.2645962,21.43235"
							fill='none'
							stroke={this.state.hover8 ? borderHighlight :border}
							strokeWidth="1"
						/>
					</G>
					<G
						delayPressIn={0}
						onPressIn={this.select9}
						onPressOut={this.toggle9}
					>
						<Path
							id="Okinawa"
							d="m 182.10246,229.24052 c -0.33075,0.0661 -1.91833,1.91833 -1.91833,1.91833 l 0.66149,0.59533 0.85994,-0.6615 1.12454,-1.32297 z m -19.71247,9.98852 c -0.33075,-0.0661 -1.12453,-1.12453 -1.38913,-1.05839 -0.2646,0.0662 -1.52143,1.65374 -1.52143,1.65374 l 1.32298,1.38914 1.38913,-0.39692 z m 53.71315,-27.71652 -1.71987,1.98448 1.19068,1.05839 1.52143,-2.24908 z m -25.33514,13.82519 0.1323,1.71988 1.25684,0.39689 1.19068,-0.99224 -1.65373,-0.19844 z m -2.18292,5.35808 -0.79379,0.79381 0.33074,1.12452 1.25684,0.33075 0.79379,-1.05839 z m -2.84442,3.63821 c -0.39689,0.0661 -2.84441,2.51366 -2.84441,2.51366 l -1.32299,0.39691 -1.52143,-1.25683 -2.05063,-0.52922 1.19069,1.65375 0.85994,1.58757 -2.11677,0.85994 -1.98448,0.79381 v 1.71988 l -1.45528,2.11677 -0.33075,1.78602 1.05839,0.59536 1.52143,-1.323 0.66149,-2.38138 0.79379,-1.32296 -0.19845,-0.85994 1.98448,0.0661 1.65373,-1.19069 1.45528,-0.99224 2.18293,-0.59533 0.85994,-1.19069 0.46304,-1.25683 z m 12.83295,-16.6696 -0.69457,0.42997 0.29767,3.73743 1.45528,-1.02531 0.62842,-0.56227 z m 13.06446,-9.09551 -2.87749,1.58757 -2.97671,0.42998 -1.05839,1.02531 -1.88525,0.16537 -0.0992,1.05839 0.36383,2.44752 -0.82687,0.46304 0.0662,0.85994 1.85218,0.1323 -0.19845,-1.05838 -0.33075,-0.59535 2.28215,-0.49612 1.32299,-1.4222 0.42997,-0.99224 2.51367,-0.72764 2.05062,-1.12454 z"
							stroke={this.state.hover9 ? borderHighlight :border}
							fill={this.state.hover9 ? fillHighlight : OkinawaColor}
							strokeWidth="1"
						/>
						<Path
							id="box"
							d="m 141.13651,256.44145 c -0.37419,-1.87097 -1.87098,-29.56151 -1.87098,-29.56151 l 78.58125,-38.91642 h 12.34848 l 0.7484,69.60054 z"
							stroke={border}
							strokeWidth="1"
							fill='none'
						/>
						<Text
							fill={this.state.hover9 ? borderHighlight :border}
							stroke={this.state.hover9 ? borderHighlight :border}
							fontSize="10.47749996"
							fontWeight="bold"
							x="180.64085"
							y="253.34154"
						>OKINAWA</Text>
					</G>
			</Svg>
			</View>
		);
	}
};

const styles = {
	containerStyle: {
		flex: 1,
	},
};
export default Map;