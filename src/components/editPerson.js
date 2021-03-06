import React from 'react';
import AddInput from './addInput';
import SingleInputForm from './singleInputForm';
import { connect } from 'react-redux';
import './editPerson.css';
import { List, Divider, Collapse } from 'antd';
import { Row, Col } from 'react-bootstrap';

const Panel = Collapse.Panel;

class EditPerson extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	onSubmitHandler = (likey, obj) => {
		if(likey === 'like'){
			console.log('like');
			console.log(obj);
		} else {
			console.log('dislike');
			console.log(obj);
		}
	}
	render(){

		const showQuestionnair = this.props.questionnair.map((item,idx)=>{
			return (
				<Panel
				header={item.q}
				key={idx}
				>
					<p>{item.a}</p>
				</Panel>
			);
		});


		return (
			<Row className='preference'>

				<Col xs={10} xsOffset={1}>

					<h3 className='block-center'>{this.props.info.firstName}</h3>
					{/*<Avatar shape='square' size='large' icon='user' className='friendAvatar'/>*/}
					{/*<Row>
						<Col xs={12} sm={6} smOffset={3}>
						{this.props.editPersonData.info.url === ''
							? <Avatar shape='square' size='large' icon='user' className='friendAvatar'/>
							: <Image className='person-img' alt='img' src={this.props.editPersonData.info.url} responsive rounded />}
						</Col>
					</Row>*/}
					<h4>Date of birth</h4>
					<p>
						{this.props.info.DOB}
					</p>


					<Divider />

					
						{/*<h3>Likes</h3>
						<List
						dataSource={this.props.data.likes}
						renderItem={item => (
							<List.Item
							actions={[<a>edit</a>, <a>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>
						<SingleInputForm />

						<Divider />


						<h3>Dislikes</h3>
						<List
						dataSource={this.props.data.dislikes}
						renderItem={item => (
							<List.Item
							actions={[<a>edit</a>, <a>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>
						<SingleInputForm />

						<Divider />*/}

						<h3>Notes</h3>
						<SingleInputForm />
						<List
						dataSource={this.props.data.notes}
						renderItem={item => (
							<List.Item
							actions={[<a>edit</a>, <a>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>
						

						<Divider />

						<h3>Events</h3>
						<SingleInputForm />
						<List
						dataSource={this.props.data.events}
						renderItem={item => (
							<List.Item
							actions={[<a>edit</a>, <a>remove</a>]}
							>
								{item}
							</List.Item>
						)}
						/>
						

						{/*<Divider />

						<h3>Questionnairs</h3>
						<Collapse>
							{showQuestionnair}
						</Collapse>*/}
				</Col>
			</Row>
		);
	}
}
const mapStateToProps = state => ({	
	questionnair: state.editPerson.questionnair,
	info: state.editPerson.info,
	data: state.editPerson.data
})

export default connect(mapStateToProps)(EditPerson);