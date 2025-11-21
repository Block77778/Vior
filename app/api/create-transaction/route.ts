import { NextRequest, NextResponse } from 'next/server'

const VIOR_TOKEN_ADDRESS = '6jx3HUuxV5fKcjzBr53rMXhkNBjYvoVEVnHK61mxs4EL'
const PRESALE_PRICE = 0.00050

export async function POST(request: NextRequest) {
  try {
    const { buyerPublicKey, amount, mode, tokenAddress } = await request.json()

    if (!buyerPublicKey || !amount || !mode || !tokenAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (Number(amount) <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      )
    }

    console.log('[v0] Transaction request:', {
      buyer: buyerPublicKey,
      amount,
      mode,
      token: tokenAddress,
      price: PRESALE_PRICE,
    })

    // Calculate tokens to send
    const solPrice = 200
    let tokensToSend = 0
    
    if (mode === 'swap') {
      tokensToSend = (Number(amount) * solPrice) / PRESALE_PRICE
    } else {
      tokensToSend = Number(amount) / PRESALE_PRICE
    }

    // In production, integrate with:
    // 1. Solana Web3.js to create and sign transactions
    // 2. Database to record presale purchases
    // 3. Wallet validation and transaction signing

    const transactionId = `vior_${Date.now()}_${Math.random().toString(36).substring(7)}`

    return NextResponse.json({
      success: true,
      transactionId,
      buyer: buyerPublicKey,
      amountSent: amount,
      tokensReceived: tokensToSend.toFixed(2),
      mode,
      tokenAddress: VIOR_TOKEN_ADDRESS,
      presalePrice: PRESALE_PRICE,
      timestamp: new Date().toISOString(),
      message: 'Transaction recorded. Please sign with your wallet to complete.',
    }, { status: 200 })

  } catch (error) {
    console.error('[v0] Transaction error:', error)
    return NextResponse.json(
      { error: 'Transaction creation failed', details: (error as Error).message },
      { status: 500 }
    )
  }
}
