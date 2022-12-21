import './button.css';

/*
 props:
 1- Argomenti passi alla funzione
 2- attributi passati al componente nel JSX
*/

const buttonVariantMap = {
  primary: 'text-xl color-pink',
  secondary: 'text-sm color-red'
}
// ${buttonVariantMap[variant] ?? ''}

export function Button(props) {
  console.log('props di Button:', props);

  const { 
    className = '',
    children = 'Non ho {children}',
    variant = 'none',
    ...otherAttributes
  } = props;

  return (
      <button
          className={`Button Button--variant-${variant} ${className}`}
          {...otherAttributes}
      >
        {children}
      </button>
  );
}