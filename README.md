1. Title and short description

```
This is a appointment system for a spa , with administrator panel (private) and the appointment view to the clients (public).
```

2. Tech Stack

```
Next.js(App Router) , Typescript , Prisma , PostgreSQL(Supebase) , Tailwind
```

3. Features

```
- [ ]
```

4. Database Design and key decisions.

```
- Services get deactivated instead of delete it. 
- When u make and appointment it saves a snapshot of the name and the price.
- Only one non-cancelled appointment is allowed at a given timestmap across the spa. Cancelling an appointment makes that timestamp available again


```
