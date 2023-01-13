/* eslint-disable */
import React, { useRef, useEffect, useState } from 'react'
import { useField } from 'formik'
import Inputmask from 'inputmask'
import styled from '@emotion/styled'

type TextFieldInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  errorMessage?: string
  mask?: string | Record<string, any>
  label?: string
  children?: any
}

export const TextFieldInput = React.memo(function textFieldInput({
  children: Children,
  className,
  style,
  errorMessage,
  ...props
}: TextFieldInputType) {
  const ref = useRef<any>(null)
  const [displayErrorMessage, setDisplayErrorMessage] = useState(errorMessage)
  useEffect(() => {
    if (!errorMessage) setTimeout(() => setDisplayErrorMessage(''), 500)
    else setDisplayErrorMessage(errorMessage)
  }, [errorMessage])
  useEffect(() => {
    if (props.mask) {
      let mask = props.mask
      if (mask === 'cpf') mask = { mask: '999.999.999-99' }
      else if (mask === 'cnpj') mask = { mask: '99.999.999/9999-99' }
      // else if (mask === 'cpfCnpj') { mask = { mask: ['999.999.999-99', '99.999.999/9999-99'], keepStatic: true } }
      else if (mask === 'renach') mask = { mask: 'GO999999999' }
      else if (mask === 'data') mask = { mask: '99/99/9999' }
      else if (mask === 'telefone') {
        mask = { mask: ['(99) 9999-9999', '(99) 99999-9999'], keepStatic: true }
      } else mask = { mask }
      Inputmask(mask).mask(ref.current)
    }
  }, [props.mask])
  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    if (props.onPaste) props.onPaste(e)
    if (props.onChange) props.onChange(e as any)
  }
  return (
    <Label hasError={!!errorMessage} style={style} className={className}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 7px' }}>
        {props.label}
        <ErrorMessage error={errorMessage} />
      </div>
      {props.type === 'select' ? (
        <select {...(props as any)}>{Children}</select>
      ) : Children ? (
        React.cloneElement(Children, props)
      ) : (
        <input
          ref={ref}
          {...(props as any)}
          onPaste={handlePaste}
          checked={props.type === 'checkbox' && props.value}
        />
      )}
    </Label>
  )
})
const Label = styled.label<{ hasError: boolean }>(
  (props) => `
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  font-size: 14px;
  input, textarea, select {
    background: #FFFFFF;
    border: 1px solid #828282;
    border-radius: 20px;
    transition: .35s box-shadow;
    height: 3em;
    padding-left: 1em;
    width: 100%;
    outline: none;
    transition: border .3s;
    margin-top: 8px;
    &:disabled {
      background: #f2f2f2;
    }
    ${
      props.hasError
        ? `
      border-color: red;
    `
        : ''
    }
  }
  .error-message {
    color: red;
    text-align: right;
  }
`
)

const ErrorMessage = ({ error }: { error?: string }) => {
  const { Layout, Text } = ErrorMessage
  if (!error) return null
  return (
    <Layout>
      <Text>{error}</Text>
    </Layout>
  )
}
ErrorMessage.Layout = styled.div``
ErrorMessage.Text = styled.span`
  color: red;
  font-weight: 500;
`

export const InputField = React.memo(function textField(props: any) {
  const [field, meta] = useField(props.name)

  if (!props.name) throw new Error('É necessário passar o parâmetro "name" para um "TextField"')
  const errorMessage = meta.touched && meta.error ? meta.error : null

  return (
    <div>
      <TextFieldInput
        {...field}
        {...props}
        onChange={(e) => {
          if (props.onChange) props.onChange(e)
          field.onChange(e)
        }}
        errorMessage={errorMessage}
      />
    </div>
  )
})
