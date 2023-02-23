interface Props {
  color: string;
  width: string;
  children: string;
}

export function Category(props: Props) {
  const BGcolorStyle = { backgroundColor: props.color };
  const categoryWidth = { width: props.width };
  return (
    <>
      <div style={{ ...BGcolorStyle, ...categoryWidth }}>
        <h4>{props.children}</h4>
      </div>
    </>
  );
}
