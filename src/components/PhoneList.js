import React from 'react';
import { connect } from 'react-redux';
import PhoneListItem from './PhoneListItem';
import SelectExpenses from '../selectors/cart';

const PhoneList = (props) => (
    <div>
        <h1>Phone List</h1>
        {props.phones.map((phone) => (
            <PhoneListItem key={phone.id} {...phone}/>
        ))}
        {console.log(props.cart, 'phone list')}
    </div>
)

const mapStateToProps = (state) => {

    function getUnique(arr, comp) {
        const unique = arr.map(e => e[comp])
           // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
        
         return unique;
      }

    return {
        phones: SelectExpenses(state.phones, state.filters),
        cart: getUnique(state.cart, 'id'),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(PhoneList)