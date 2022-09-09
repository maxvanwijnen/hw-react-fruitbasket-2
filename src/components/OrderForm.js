import React from 'react';
import css from '../styles/Form.module.css';
import { useForm  } from 'react-hook-form';

const TextField = ({fieldName, prettyName, registerField, errors }) => {



    return  (
        <div>
            <label htmlFor={fieldName}>{prettyName}</label>
            <input type="text" {...registerField} />
            {errors && <div className={css['error']}>{errors.message}</div> }
        </div>
    )
}



const OrderForm = () => {

    const { handleSubmit, formState: { errors }, register } = useForm();


    const submitForm = (data) => {
        console.log(data);
    }

    return  (

        <form className={css['order-form']}  onSubmit={handleSubmit(submitForm)}>
            <h2>Bestelformulier</h2>
            <TextField fieldName='firstName' prettyName='Voornaam' registerField={register('firstName', {required:'Graag uw voornaam  invullen'})} errors={errors.firstName}/>
            <TextField fieldName='lastName' prettyName='Achternaam' registerField={register('lastName',{required:'Graag uw achternaam  invullen'})}  errors={errors.lastName}/>
            <TextField fieldName='postcode' prettyName='Postcode' registerField={register('postcode',{required:'Graag uw postcode invullen'})} errors={errors.postcode}/>
            <TextField fieldName='age' prettyName='Leeftijd' registerField={register('age')} errors={errors.age}/>


            <label htmlFor="delivery-frequency">Frequentie</label>
            <select {...register('deliveryFrequency')} id="delivery-frequency">
                <option value="weekly">Iedere week</option>
                <option value="two-weekly">Om de week</option>
                <option value="monthly">Iedere maand</option>
            </select>

            <label htmlFor="evening">Avond bezorging</label>
            <input id="evening" type="radio" value="evening" {...register('deliveryMoment')} />
            <label htmlFor="day">Overdag bezorging</label>
            <input id="day" type="radio" value="day" {...register('deliveryMoment')} />

            <label>Opmerking:</label>
            <textarea {...register('comments')} id="comments" cols="30" rows="10"></textarea>

            <label htmlFor="terms">Ik ga akkoord met de voorwaarden</label>
            <input type="checkbox" {...register('terms',{required:"U dient akkoord te zijn met onze voorwaarden alvorens te bestellen"})} />
            {errors.terms && <div className={css['error']}>{errors.terms.message}</div>}
            <button type="submit">Bestellen</button>
        </form>
    )
}

export default OrderForm;