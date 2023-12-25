import React, { Component } from 'react'

import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import { Link } from 'react-router-dom';

 class User extends Component {
  render() {
    return (
        <div className='body'>

<Image className='id1' src="https://www.esenlerecesurucukursu.com/wp-content/uploads/2017/10/trafik-isaretleri.png" fluid/>

<Navbar expand="lg" className="bg-body-tertiary">
  
        <Navbar.Brand href="#home"><img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/hd/7d2ae821252745.562fe1235d2c2.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h4 className='link1'>ANA SAYFA -</h4></Nav.Link>
            <Nav.Link href="#link"><h4>HAKKIMIZDA -</h4></Nav.Link>
            <Nav.Link href="#link"><h4>TRAFİK KAZALARI İSTATİSTİKLERİ -</h4></Nav.Link>
            <Nav.Link href="#link"><h4>ORANLARI GÖRÜNTÜLE -</h4></Nav.Link>
            <Nav.Link href="#link"><h4>İLETİŞİM</h4></Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>


  
    <CardGroup className='cards'>
      <Card className='card1'>
        <Card.Img  className='c1img' variant="top" src="https://i.pinimg.com/736x/20/7f/e8/207fe8492d30ca37753b31a6460151a9.jpg" />
        <Card.Body>
          <Card.Title>ALKOL VE UYUŞTURUCU</Card.Title> 
          <Card.Text>
          Alkol veya uyuşturucu madde kullanımı, sürücülerin tepki sürelerini azaltır, 
           dağıtır ve karar verme yeteneklerini olumsuz etkileyerek kazalara neden olabilir.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='card2'>
        <Card.Img variant="top" src="https://www.bostancisurucu.com/Upload/Dosyalar/resim-png/t1-23e1488d-43c0-42f3-80e9-34503464160d.png?width=850" />
        <Card.Body>
          <Card.Title>AŞIRI HIZ VE İHLALLER</Card.Title>
          <Card.Text>
          Sürücülerin belirlenen hız sınırlarını aşması, trafik kurallarına uymamaları, 
          kırmızı ışık geçmeleri gibi hızla ilgili ihlaller kazalara neden olabilir.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='card3'>
        <Card.Img variant="top" className='c3img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4HgT1-fUbny9EVgXlNYBk9-8IFm6MyIq1w&usqp=CAU" />
        <Card.Body>
          <Card.Title>HAVA KOŞULLARI</Card.Title>
          <Card.Text>
          Yağış, sis, kar veya buzlu yollar gibi hava koşulları sürücülerin kontrolünü zorlaştırabilir ve kazalara neden olabilir.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

    <container >
      <h1 className='baslik'>ELAZIĞ  BÖLGESEL TRAFİK KAZALARI</h1>
      <img className='harita' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Elaz%C4%B1%C4%9F_districts.png/776px-Elaz%C4%B1%C4%9F_districts.png'></img>
    </container>
     

    <ButtonGroup  className='butons' vertical>
   
   

      <DropdownButton 
        as={ButtonGroup}
        title="ELAZIĞ MERKEZ İSTATİSTİKLERİ"
      id="Warning" variant='Danger'
    
      >
        <Dropdown.Item eventKey="1">İSTATİSTİKLERİ</Dropdown.Item>
        <Dropdown.Item eventKey="2">İSTATİSTİKLERİ</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title="SİVRİCE"
        id="bg-vertical-dropdown-1" variant='Danger'
      >
        <Dropdown.Item eventKey="1">İSTATİSTİKLERİ</Dropdown.Item>
        <Dropdown.Item eventKey="2">İSTATİSTİKLERİ</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="PALU"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="1">İSTATİSTİKLERİ</Dropdown.Item>
        <Dropdown.Item eventKey="2">İSTATİSTİKLERİ</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="BASKİL"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="MADEN"
        id="bg-vertical-dropdown-4"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="ALACAKAYA"
        id="bg-vertical-dropdown-5"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="ARICAK"
        id="bg-vertical-dropdown-6"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="KOVANCILAR"
        id="bg-vertical-dropdown-7"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="KEBAN"
        id="bg-vertical-dropdown-8"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="AĞIN"
        id="bg-vertical-dropdown-9"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        title="KARAKOÇAN"
        id="bg-vertical-dropdown-10"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
     

    </ButtonGroup>


<a href='file:///C:/Users/Packard%20bell/reacttasarm/src/components/admin.html'>deneme</a>


  



    
   

   


    
          


  






        </div>
     
    )
  }
}
export default User;