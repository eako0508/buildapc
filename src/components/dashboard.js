import React from 'react';
import MainContent from './mainContent';
import EditPerson from './editPerson';
import AddPerson from './addPerson';
import AddThings from './addThings';
import NavBS from './nav';
import './dashboard.css';
import { Layout, BackTop } from 'antd';
import { Row, Col } from 'react-bootstrap';

const { Content, Footer } = Layout;

export default class Dashboard extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			menu: 'MainContent'
		}
	}
	onChangeMenu = (menu) => {
		this.setState({
			menu
		});
	}
	render(){
		let onMainBody;
		if(this.state.menu === 'MainContent'){			
			onMainBody = <MainContent onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'EditPerson'){			
			onMainBody = <EditPerson onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'AddPerson'){		
			onMainBody = <AddPerson onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		} else if(this.state.menu === 'AddThings'){
			onMainBody = <AddThings onChangeMenu={menu=>this.onChangeMenu(menu)} />;
		}

		return (
			<Layout style={{ minHeight: '100vh'}}>
				<NavBS onChangeMenu={menu=>this.onChangeMenu(menu)} logoutHandler={this.props.logoutHandler} />
				<Layout>
					{/*<Header className='body-header' />*/}
					<Content className='body-content'>
						{onMainBody}
					</Content>
					<Row>
						<Col xsHidden={true}>
							<Footer className='body-footer'>
							The Little Things
							</Footer>
						</Col>
					</Row>
					<BackTop />
				</Layout>
			</Layout>
		);
	}
}
