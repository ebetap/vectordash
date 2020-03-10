const Block = props => {
  const { children, style, className, ...blockProps } = props;

  const classNames = [...className].join(' ');

  return (
    <section className={classNames} style={{ ...style }} {...blockProps}>
      {children}
    </section>
  );
};

export default Block;
