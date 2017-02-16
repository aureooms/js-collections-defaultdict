import _DefaultDict from './_DefaultDict' ;
import _defaultdict from './_defaultdict' ;

import { Dict } from '@aureooms/js-collections-dict' ;

const DefaultDict = _DefaultDict( Dict , Map ) ; // use native Map implementation
const defaultdict = _defaultdict( DefaultDict ) ;

export default defaultdict ;

export {
	defaultdict ,
	DefaultDict ,
	_defaultdict ,
	_DefaultDict ,
} ;
