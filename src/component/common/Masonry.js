import * as React from 'react';
import Masonry from 'react-masonry-component';
 
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
const elementList = [{
    index: 0,
    src: 'src/img/device-mockups/apple_watch/edition/gold.png'
  },
  {
    index: 1,
    src: 'src/img/device-mockups/apple_watch/edition/gold.png'
  },
  {
    index: 2,
    src: 'src/img/device-mockups/apple_watch/edition/gold.png'
  }
];
class Maso extends React.Component {
    render() {
        const childElements = elementList.map(function(v){
           return (
                <li className="image-element-class" key={v.index.toString()}>
                    <img src="/static/media/bg-cta.36ddbb2d.jpg" />
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Maso;