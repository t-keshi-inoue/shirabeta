import React, { FC } from 'react';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { theme, Box, Button, Spacing, Label } from 'components/atoms';

type Props = {
  name: string;
  label: string;
  type: string;
  input: FC;
};
type FormFormatProps = {
  formDatas: {
    initialValues: object;
    validationSchema: object;
    action: string;
    onSubmit: (data: object) => void;
    items: Props[];
  };
  gradation?: string;
};

const FormFormat: FC<FormFormatProps> = ({ formDatas, gradation }) => {
  return (
    <Formik
      initialValues={formDatas.initialValues}
      validationSchema={formDatas.validationSchema}
      onSubmit={formDatas.onSubmit}
    >
      <Form>
        {formDatas.items.map(data => {
          return (
            <li key={data.name}>
              <Box>
                <Label htmlFor={data.name} style={{ width: '80px' }}>
                  {data.label}
                </Label>
                <Field as={data.input} name={data.name} type={data.type} />
              </Box>
              <ErrorMessage
                name={data.name}
                render={msg => <p style={{ color: 'red' }}>{msg}</p>}
              />

              <Spacing mBottom={theme.large} />
            </li>
          );
        })}
        <Button className={`primary large stretch ${gradation}`} type="submit">
          {formDatas.action}
        </Button>
      </Form>
    </Formik>
  );
};

export default FormFormat;
