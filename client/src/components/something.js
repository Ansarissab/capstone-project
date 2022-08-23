return(
    <>
    <div className="category-info">
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
    </div>
     <Card style={{ width: '18rem' }}>
        {categories.activities.map(x=>(
            <>
      <Card.Body key={x.id}>
        <Card.Img variant="top" src={x.image_url} />
        <Card.Title>{x.name}</Card.Title>
        <Card.Text>
          {x.description}
        </Card.Text>
      </Card.Body>
        </>
        ))}
        <Button variant="primary">Add to bucket list</Button>
    </Card>
    </>
)
