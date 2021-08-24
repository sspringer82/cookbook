import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Pflichtfeld, bitte einen Wert eingeben',
    notType: 'Bitte den korrekten Typ angeben',
  },
  number: {
    moreThan: 'Bitte nur Zahlen größer als 0 eingeben',
  },
});

const validationSchema = Yup.object().shape({
  title: Yup.string().required(),
  ingredient1amount: Yup.number().moreThan(0),
  ingredient2amount: Yup.number().moreThan(0),
  ingredient3amount: Yup.number().moreThan(0),
});

export default validationSchema;
