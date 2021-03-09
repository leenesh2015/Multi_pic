import React,{ useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './styles.css';

const funct = () => {
	const [ a, b ] = useState([]);

	const image = (c) => {



	
		if (c.target.files) {
			const store = Array.from(c.target.files).map((file) => URL.createObjectURL(file));

			b((prevImages) => prevImages.concat(store));
			Array.from(c.target.files).map(
				(file) => URL.revokeObjectURL(file) 
			);
		}
	};

	const renderPhotos = (source) => {
		
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};


	return (
		<div className=" Main">
			<div className="top">Select the picture</div>
			<div>

			<input type="file" id="lab"  onChange={image} />
		<div className="fal">
				<label htmlFor="file" className="plta">
		<i className="icons">pic</i>
			</label>
	</div>
		<div className="last">{renderPhotos(a)}</div>
	</div>
		</div>
	);
};

export default funct;


