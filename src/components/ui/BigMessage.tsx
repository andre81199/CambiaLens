export function BigMessage(props: any) {
  return (
    <div className={'flex'}>
      <div className="mx-auto py-32 text-center px-4">
        <span className="text-xl ml-2">{props.children}</span>
      </div>
    </div>
  )
}
